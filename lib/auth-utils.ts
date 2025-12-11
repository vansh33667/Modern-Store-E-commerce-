/**
 * Get user initial from name or email
 * @param user - User object with name and/or email
 * @returns First letter of name in uppercase, or first letter before @ in email
 */
export function getUserInitial(name?: string, email?: string): string {
  if (name && name.length > 0) {
    return name.charAt(0).toUpperCase()
  }
  if (email && email.length > 0) {
    const emailPrefix = email.split("@")[0]
    return emailPrefix.charAt(0).toUpperCase()
  }
  return "?"
}

/**
 * Clear auth data and redirect to home
 */
export function handleLogout(logoutFn: () => void, redirectUrl = "/") {
  logoutFn()
  setTimeout(() => {
    window.location.href = redirectUrl
  }, 100)
}
