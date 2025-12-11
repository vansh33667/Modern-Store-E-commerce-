import { Leaf, Droplets, Recycle, Award } from "lucide-react"

interface EcoImpactBadgeProps {
  metric: "carbon" | "water" | "recyclable" | "sustainable"
  value: number
  unit?: string
  size?: "sm" | "md" | "lg"
}

const iconMap = {
  carbon: Leaf,
  water: Droplets,
  recyclable: Recycle,
  sustainable: Award,
}

const labelMap = {
  carbon: "Carbon Footprint",
  water: "Water Usage",
  recyclable: "Recyclable",
  sustainable: "Sustainable Material",
}

export function EcoImpactBadge({ metric, value, unit = "", size = "md" }: EcoImpactBadgeProps) {
  const Icon = iconMap[metric]
  const sizeClasses = {
    sm: "h-4 w-4 text-xs",
    md: "h-5 w-5 text-sm",
    lg: "h-6 w-6 text-base",
  }

  const colorMap = {
    carbon: "bg-green-100 text-green-800",
    water: "bg-blue-100 text-blue-800",
    recyclable: "bg-teal-100 text-teal-800",
    sustainable: "bg-emerald-100 text-emerald-800",
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${colorMap[metric]}`}>
      <Icon className={sizeClasses[size]} />
      <div>
        <span className="font-semibold">{value}</span>
        <span className="ml-1">{unit}</span>
      </div>
      <span className="text-xs opacity-75">{labelMap[metric]}</span>
    </div>
  )
}
