"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterPanelProps {
  filters: any
  onFilterChange: (key: string, value: any) => void
}

export default function SearchFilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["price"])

  const toggleFilterExpand = (filter: string) => {
    setExpandedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const filterSections = [
    {
      id: "price",
      label: "Price",
      type: "range",
      options: { min: 0, max: 1000, step: 10 },
    },
    {
      id: "category",
      label: "Category",
      type: "checkbox",
      options: ["Top Wear", "Shirts", "Pants", "Jeans", "Casual Wear"],
    },
    {
      id: "rating",
      label: "Rating",
      type: "radio",
      options: ["4+", "3+", "2+", "1+"],
    },
    {
      id: "color",
      label: "Color",
      type: "checkbox",
      options: ["Black", "White", "Blue", "Red", "Green"],
    },
    {
      id: "discount",
      label: "Discount",
      type: "checkbox",
      options: ["10% off", "20% off", "30% off", "50% off"],
    },
  ]

  return (
    <div className="space-y-4">
      {filterSections.map((section) => (
        <div key={section.id} className="border rounded-lg">
          <button
            onClick={() => toggleFilterExpand(section.id)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted"
          >
            <h3 className="font-semibold">{section.label}</h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${expandedFilters.includes(section.id) ? "rotate-180" : ""}`}
            />
          </button>

          {expandedFilters.includes(section.id) && (
            <div className="px-4 py-3 border-t space-y-2">
              {section.type === "range" && (
                <input
                  type="range"
                  min={section.options.min}
                  max={section.options.max}
                  step={section.options.step}
                  value={filters[section.id]?.[1] || section.options.max}
                  onChange={(e) => onFilterChange(section.id, [section.options.min, Number.parseInt(e.target.value)])}
                  className="w-full"
                />
              )}

              {section.type === "checkbox" &&
                section.options.map((option: string) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters[section.id]?.includes(option) || false}
                      onChange={(e) => {
                        const current = filters[section.id] || []
                        const updated = e.target.checked
                          ? [...current, option]
                          : current.filter((o: string) => o !== option)
                        onFilterChange(section.id, updated)
                      }}
                      className="rounded"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}

              {section.type === "radio" &&
                section.options.map((option: string) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={section.id}
                      checked={filters[section.id] === option}
                      onChange={() => onFilterChange(section.id, option)}
                      className="rounded-full"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
            </div>
          )}
        </div>
      ))}

      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => {
          // Clear all filters
          Object.keys(filters).forEach((key) => onFilterChange(key, null))
        }}
      >
        Clear All Filters
      </Button>
    </div>
  )
}
