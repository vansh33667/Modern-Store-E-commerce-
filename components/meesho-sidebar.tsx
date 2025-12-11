"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { meeshoCategories } from "@/lib/meesho-categories"

interface MeeshoSidebarProps {
  onCategorySelect: (category: string, subcategory?: string) => void
  isOpen: boolean
  onClose: () => void
}

export function MeeshoSidebar({ onCategorySelect, isOpen, onClose }: MeeshoSidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null)

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const handleSubcategoryClick = (subcategoryName: string, categoryId: string) => {
    onCategorySelect(categoryId, subcategoryName)
    onClose()
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-background border-r border-border overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4">
          <div className="space-y-1">
            {meeshoCategories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary transition text-sm font-medium text-left"
                >
                  <span>{category.name}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${expandedCategory === category.id ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Subcategories */}
                {expandedCategory === category.id && (
                  <div className="ml-4 space-y-1 mt-1 border-l border-border pl-3">
                    {category.subcategories.map((sub, idx) => {
                      const hasNestedSubs = Array.isArray(sub.subcategories)
                      const subId = `${category.id}-${idx}`

                      return (
                        <div key={subId}>
                          <button
                            onClick={() => {
                              if (hasNestedSubs) {
                                setExpandedSubcategory(expandedSubcategory === subId ? null : subId)
                              } else {
                                handleSubcategoryClick(sub.name, category.id)
                              }
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 rounded text-xs hover:bg-secondary transition text-foreground text-left"
                          >
                            <span>{sub.name}</span>
                            {hasNestedSubs && (
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${expandedSubcategory === subId ? "rotate-180" : ""}`}
                              />
                            )}
                          </button>

                          {/* Nested subcategories */}
                          {hasNestedSubs && expandedSubcategory === subId && (
                            <div className="ml-3 space-y-1 mt-1 border-l border-border pl-2">
                              {sub.subcategories?.map((nested) => (
                                <button
                                  key={nested}
                                  onClick={() => handleSubcategoryClick(nested, category.id)}
                                  className="w-full text-left px-2 py-1.5 text-xs rounded hover:bg-secondary transition text-muted-foreground hover:text-foreground"
                                >
                                  {nested}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
