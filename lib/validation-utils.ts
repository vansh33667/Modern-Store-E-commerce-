// PAN and GST validation utilities
export function validatePAN(pan: string): boolean {
  // PAN format: AAAAA0000A where A is letter and 0 is digit
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
  return panRegex.test(pan)
}

export function validateGST(gst: string): boolean {
  // GST format: 2-digit state code + 10-digit PAN + 1-digit entity + 1-digit checksum
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9]{1}$/
  return gstRegex.test(gst)
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  // Indian phone number format: 10 digits
  const phoneRegex = /^[0-9]{10}$/
  return phoneRegex.test(phone.replace(/\D/g, ""))
}
