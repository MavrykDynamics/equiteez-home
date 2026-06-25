import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import clsx from "clsx";

import { RIcon } from "~/lib/atoms/RIcon";

import { PHONE_COUNTRIES, type PhoneCountry } from "./countryDialCodes";
import styles from "./RFormControls.module.css";

/**
 * SVG flag chip via the `flag-icons` library (`fi fi-<iso2>`). Renders
 * consistently everywhere — unlike flag emoji, which the iOS Simulator and
 * Windows browsers don't draw. Falls back to a neutral `.fi` box if no code.
 */
function Flag({ iso2 }: { iso2?: string }) {
  return (
    <span
      aria-hidden
      className={clsx(styles.comboFlag, "fi", iso2 && `fi-${iso2.toLowerCase()}`)}
    />
  );
}

export type RCountryCodeSelectProps = {
  /** Selected dialling code, e.g. "+44". */
  value: string;
  /** Fired with the chosen country's dialling code and full record. */
  onChange: (dial: string, country: PhoneCountry) => void;
  countries?: PhoneCountry[];
  /** ISO-2 codes pinned to the top of the list (when not searching). */
  priorityIso2?: string[];
  invalid?: boolean;
  buttonId?: string;
  "aria-label"?: string;
};

// UAE, US, UK, Saudi pinned to the top by default.
const DEFAULT_PRIORITY_ISO2 = ["AE", "US", "GB", "SA"];

/** Branded, searchable country dialling-code combobox. */
export function RCountryCodeSelect({
  value,
  onChange,
  countries = PHONE_COUNTRIES,
  priorityIso2 = DEFAULT_PRIORITY_ISO2,
  invalid,
  buttonId,
  "aria-label": ariaLabel = "Country dialling code",
}: RCountryCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Track the chosen country so the flag stays accurate even when several
  // countries share a dialling code (e.g. +1 → US/CA). Seeded from `value`.
  const [selectedIso2, setSelectedIso2] = useState(
    () => countries.find((c) => c.dial === value)?.iso2 ?? ""
  );

  // Re-sync if `value` is changed externally (reset/prefill) to a code the
  // current selection no longer matches, so the flag doesn't go stale.
  useEffect(() => {
    const current = countries.find((c) => c.iso2 === selectedIso2);
    if (!current || current.dial !== value) {
      setSelectedIso2(countries.find((c) => c.dial === value)?.iso2 ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const selected =
    countries.find((c) => c.iso2 === selectedIso2) ??
    countries.find((c) => c.dial === value);

  // Flat list shown in the popover, plus the index where the divider between the
  // pinned "priority" countries and the rest should appear (-1 while searching).
  const { visible, dividerIndex } = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      const priority = priorityIso2
        .map((code) => countries.find((c) => c.iso2 === code))
        .filter((c): c is PhoneCountry => Boolean(c));
      const prioritySet = new Set(priority.map((c) => c.iso2));
      const rest = countries.filter((c) => !prioritySet.has(c.iso2));
      return {
        visible: [...priority, ...rest],
        dividerIndex: priority.length,
      };
    }
    const normalisedDial = q.replace(/^00/, "+");
    const filtered = countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso2.toLowerCase().includes(q) ||
        c.dial.includes(q) ||
        c.dial.includes(normalisedDial)
    );
    return { visible: filtered, dividerIndex: -1 };
  }, [countries, priorityIso2, query]);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  // Focus the search box and reset highlight when opening.
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      searchRef.current?.focus();
    }
  }, [open]);

  // Keep the highlighted option in view.
  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.children[activeIndex] as
      | HTMLElement
      | undefined;
    node?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const choose = (country: PhoneCountry) => {
    setSelectedIso2(country.iso2);
    onChange(country.dial, country);
    setOpen(false);
  };

  const onSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, visible.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const country = visible[activeIndex];
      if (country) choose(country);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div className={styles.combo} ref={rootRef}>
      <button
        type="button"
        id={buttonId}
        className={clsx(styles.comboButton, invalid && styles.invalid)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((o) => !o)}
      >
        <Flag iso2={selected?.iso2} />
        <span className={styles.comboDial}>{selected?.dial ?? value}</span>
        <RIcon
          aria-hidden
          className={styles.comboChevron}
          name="arrow-short-down"
          size="small"
        />
      </button>

      {open ? (
        <div className={styles.comboPopover}>
          <div className={styles.comboSearchRow}>
            <input
              ref={searchRef}
              type="text"
              className={styles.comboSearch}
              placeholder="Search country or code…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={onSearchKeyDown}
              aria-label="Search country or dialling code"
            />
          </div>
          <ul className={styles.comboList} ref={listRef} role="listbox">
            {visible.length === 0 ? (
              <li className={styles.comboEmpty}>No matches</li>
            ) : (
              visible.map((country, index) => {
                const isActive = index === activeIndex;
                const isSelected = country.iso2 === selectedIso2;
                return (
                  <li
                    key={country.iso2}
                    role="option"
                    aria-selected={isSelected}
                    className={clsx(
                      index === dividerIndex && styles.comboDividerBefore
                    )}
                  >
                    <button
                      type="button"
                      className={clsx(
                        styles.comboOption,
                        isActive && styles.comboOptionActive,
                        isSelected && styles.comboOptionSelected
                      )}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => choose(country)}
                    >
                      <Flag iso2={country.iso2} />
                      <span className={styles.comboName}>{country.name}</span>
                      <span className={styles.comboOptionDial}>
                        {country.dial}
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
