"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, TreePine, Droplets, Award } from "lucide-react"

interface EcoMetrics {
  total_carbon_kg: number
  trees_equivalent: number
  total_purchases: number
  sustainable_purchases: number
  offset_carbon_kg: number
  badges: string[]
}

interface OffsetProgram {
  id: string
  name: string
  description: string
  carbon_offset_per_unit: number
  cost_per_offset: number
}

export default function EcoImpactPage() {
  const [metrics, setMetrics] = useState<EcoMetrics | null>(null)
  const [programs, setPrograms] = useState<OffsetProgram[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [metricsRes, programsRes] = await Promise.all([
        fetch("/api/eco-impact/metrics"),
        fetch("/api/eco-impact/offset-programs"),
      ])

      if (metricsRes.ok) {
        const data = await metricsRes.json()
        setMetrics(data)
      }

      if (programsRes.ok) {
        const data = await programsRes.json()
        setPrograms(data)
      }
    } catch (error) {
      console.error("Error fetching eco data:", error)
    } finally {
      setLoading(false)
    }
  }

  const carbonReductionPercentage = metrics
    ? Math.min(100, (metrics.offset_carbon_kg / Math.max(metrics.total_carbon_kg, 1)) * 100)
    : 0

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} wishlistCount={0} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Eco Impact</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your environmental footprint and offset your carbon emissions through sustainable shopping
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-green-600"></div>
            </div>
          ) : metrics ? (
            <>
              {/* Stats Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                {/* Total Carbon */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-muted-foreground">Total Carbon</p>
                    </div>
                    <div className="text-3xl font-bold">{metrics.total_carbon_kg.toFixed(1)}</div>
                    <p className="text-xs text-muted-foreground">kg CO₂</p>
                  </CardContent>
                </Card>

                {/* Trees Equivalent */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <TreePine className="h-5 w-5 text-emerald-600" />
                      <p className="text-sm text-muted-foreground">Trees Needed</p>
                    </div>
                    <div className="text-3xl font-bold">{metrics.trees_equivalent}</div>
                    <p className="text-xs text-muted-foreground">to offset impact</p>
                  </CardContent>
                </Card>

                {/* Sustainable Purchases */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <p className="text-sm text-muted-foreground">Green Choices</p>
                    </div>
                    <div className="text-3xl font-bold">{metrics.sustainable_purchases}</div>
                    <p className="text-xs text-muted-foreground">of {metrics.total_purchases} purchases</p>
                  </CardContent>
                </Card>

                {/* Carbon Offset */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Droplets className="h-5 w-5 text-cyan-600" />
                      <p className="text-sm text-muted-foreground">Offset Progress</p>
                    </div>
                    <div className="text-3xl font-bold">{carbonReductionPercentage.toFixed(0)}%</div>
                    <p className="text-xs text-muted-foreground">reduction achieved</p>
                  </CardContent>
                </Card>
              </div>

              {/* Carbon Offset Programs */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Offset Your Impact</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {programs.map((program) => (
                    <Card key={program.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{program.name}</CardTitle>
                        <CardDescription>{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            {program.carbon_offset_per_unit} kg CO₂ per unit
                          </p>
                          <p className="text-lg font-bold text-accent">${program.cost_per_offset.toFixed(2)}</p>
                        </div>
                        <Button className="w-full">Support Program</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sustainability Badges */}
              {metrics.badges && metrics.badges.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Sustainability Achievements</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {metrics.badges.map((badge) => (
                      <Card key={badge} className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                        <CardContent className="pt-6 text-center">
                          <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                          <p className="font-semibold text-sm capitalize">{badge.replace(/_/g, " ")}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">Sign in to view your eco impact</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
