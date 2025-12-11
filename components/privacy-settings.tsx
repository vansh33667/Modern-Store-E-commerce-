"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Lock, AlertCircle, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface PrivacySettings {
  data_collection_enabled: boolean
  personalization_enabled: boolean
  marketing_emails_enabled: boolean
  third_party_sharing_enabled: boolean
  profile_visibility: string
  activity_history_retention: number
}

export function PrivacySettings() {
  const [settings, setSettings] = useState<PrivacySettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleteRequested, setDeleteRequested] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/privacy/settings")
      const data = await response.json()
      setSettings(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load privacy settings",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const updateSettings = async (updates: Partial<PrivacySettings>) => {
    setSaving(true)
    try {
      const response = await fetch("/api/privacy/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })

      if (!response.ok) throw new Error("Failed to update")

      const updated = await response.json()
      setSettings(updated)
      toast({
        title: "Success",
        description: "Privacy settings updated",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update settings",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const requestDataDeletion = async () => {
    if (!confirm("Are you sure you want to request account deletion? This cannot be undone.")) return

    try {
      const response = await fetch("/api/privacy/delete-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          request_type: "full_account",
          reason: "User requested deletion",
        }),
      })

      if (!response.ok) throw new Error("Failed to request deletion")

      setDeleteRequested(true)
      toast({
        title: "Success",
        description: "Deletion request submitted. Check your email for confirmation.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit deletion request",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return <div>Loading privacy settings...</div>
  }

  if (!settings) {
    return <div>Failed to load settings</div>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Privacy & Data Settings
          </CardTitle>
          <CardDescription>Control how your data is collected and used</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Data Collection */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Data Collection</h3>
              <p className="text-sm text-muted-foreground">Allow collection of browsing and purchase data</p>
            </div>
            <Switch
              checked={settings.data_collection_enabled}
              onCheckedChange={(checked) =>
                updateSettings({
                  ...settings,
                  data_collection_enabled: checked,
                })
              }
              disabled={saving}
            />
          </div>

          {/* Personalization */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Personalization</h3>
              <p className="text-sm text-muted-foreground">Enable personalized recommendations and offers</p>
            </div>
            <Switch
              checked={settings.personalization_enabled}
              onCheckedChange={(checked) =>
                updateSettings({
                  ...settings,
                  personalization_enabled: checked,
                })
              }
              disabled={saving}
            />
          </div>

          {/* Marketing Emails */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Marketing Emails</h3>
              <p className="text-sm text-muted-foreground">Receive promotional emails and newsletters</p>
            </div>
            <Switch
              checked={settings.marketing_emails_enabled}
              onCheckedChange={(checked) =>
                updateSettings({
                  ...settings,
                  marketing_emails_enabled: checked,
                })
              }
              disabled={saving}
            />
          </div>

          {/* Third Party Sharing */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Third-Party Sharing</h3>
              <p className="text-sm text-muted-foreground">Share data with trusted partners for analytics</p>
            </div>
            <Switch
              checked={settings.third_party_sharing_enabled}
              onCheckedChange={(checked) =>
                updateSettings({
                  ...settings,
                  third_party_sharing_enabled: checked,
                })
              }
              disabled={saving}
            />
          </div>

          {/* Activity History Retention */}
          <div>
            <h3 className="font-medium mb-2">Activity History Retention</h3>
            <select
              value={settings.activity_history_retention}
              onChange={(e) =>
                updateSettings({
                  ...settings,
                  activity_history_retention: Number.parseInt(e.target.value),
                })
              }
              className="w-full px-3 py-2 border border-border rounded-md bg-background"
              disabled={saving}
            >
              <option value={30}>30 days</option>
              <option value={90}>90 days</option>
              <option value={180}>180 days</option>
              <option value={365}>1 year</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Data Deletion */}
      <Card className="border-red-200 bg-red-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            Danger Zone
          </CardTitle>
          <CardDescription>Irreversible actions</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="destructive"
            onClick={requestDataDeletion}
            disabled={deleteRequested || saving}
            className="gap-2"
          >
            <Trash2 className="h-4 w-4" />
            {deleteRequested ? "Deletion Requested" : "Delete My Account"}
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            {deleteRequested
              ? "Check your email for a confirmation link to complete the deletion."
              : "Request permanent deletion of your account and all associated data."}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
