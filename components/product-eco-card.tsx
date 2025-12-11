"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Leaf, Droplets, TreePine } from "lucide-react"

interface ProductEcoMetrics {
  carbon_footprint_kg: number
  water_usage_liters: number
  packaging_recyclable_percentage: number
  sustainable_material_percentage: number
  eco_certifications: string[]
  repairability_score: number
  recyclability_score: number
}

interface ProductEcoCardProps {
  product_id: string
}

export function ProductEcoCard({ product_id }: ProductEcoCardProps) {
  const [metrics, setMetrics] = useState<ProductEcoMetrics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch(`/api/eco-impact/product-metrics?product_id=${product_id}`)
        const data = await response.json()
        setMetrics(data)
      } catch (error) {
        console.error("Error fetching eco metrics:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [product_id])

  if (loading || !metrics) {
    return null
  }

  return (
    <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Leaf className="h-5 w-5 text-green-600" />
        Environmental Impact
      </h3>

      <div className="space-y-4">
        {/* Carbon Footprint */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <TreePine className="h-4 w-4" />
              Carbon Footprint
            </span>
            <span className="text-sm font-bold text-green-700">{metrics.carbon_footprint_kg} kg CO₂</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Equivalent to {(metrics.carbon_footprint_kg / 21).toFixed(2)} trees to offset
          </p>
        </div>

        {/* Water Usage */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              Water Usage
            </span>
            <span className="text-sm font-bold text-blue-700">{metrics.water_usage_liters}L</span>
          </div>
        </div>

        {/* Recyclable Materials */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Recyclable Packaging</span>
            <span className="text-sm font-bold text-teal-700">{metrics.packaging_recyclable_percentage}%</span>
          </div>
          <Progress value={metrics.packaging_recyclable_percentage} className="h-2" />
        </div>

        {/* Sustainable Materials */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Sustainable Materials</span>
            <span className="text-sm font-bold text-emerald-700">{metrics.sustainable_material_percentage}%</span>
          </div>
          <Progress value={metrics.sustainable_material_percentage} className="h-2" />
        </div>

        {/* Repairability & Recyclability Scores */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="bg-white rounded p-2">
            <p className="text-xs text-muted-foreground">Repairability</p>
            <p className="text-lg font-bold text-orange-600">{metrics.repairability_score}/100</p>
          </div>
          <div className="bg-white rounded p-2">
            <p className="text-xs text-muted-foreground">Recyclability</p>
            <p className="text-lg font-bold text-green-600">{metrics.recyclability_score}/100</p>
          </div>
        </div>

        {/* Certifications */}
        {metrics.eco_certifications && metrics.eco_certifications.length > 0 && (
          <div className="pt-2 border-t border-green-200">
            <p className="text-xs font-medium mb-2">Certifications</p>
            <div className="flex flex-wrap gap-2">
              {metrics.eco_certifications.map((cert) => (
                <span key={cert} className="text-xs bg-white px-2 py-1 rounded border border-green-200">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
