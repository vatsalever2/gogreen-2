export const site = {
  name: "GoGreen Solutions",
  legalName: "GoGreen Solutions INC",
  domain: "www.gogreensolutions.co",
  url: "https://www.gogreensolutions.co",
  email: "contact@gogreensolutions.co",
  phone: "(t) 571) 678-2244",
  phoneHref: "tel:+15716782244",
  address: {
    street: "201 Elden Street, Suite 203",
    city: "Herndon",
    state: "VA",
    zip: "20170",
  },
  founded: 2020,
  links: {
    linkedin: "https://www.linkedin.com/company/104900608/",
    google: "https://g.page/r/CR57PkHjCQ5YEAE/review",
  },
  stats: [
    { value: "5,000+", label: "Projects Completed" },
    { value: "54+", suffix: "MW", label: "Installed Capacity" },
    { value: "7", label: "States Served" },
    { value: "25", suffix: "yr", label: "Workmanship Warranty" },
    { value: "48", suffix: "hr", label: "Service Response SLA" },
    { value: "15+", label: "Years of Field Experience" },
  ],
  states: [
    { code: "VA", name: "Virginia", priority: true, slug: "virginia" },
    { code: "MD", name: "Maryland", priority: true, slug: "maryland" },
    { code: "DC", name: "Washington, D.C.", priority: true, slug: "washington-dc" },
    { code: "PA", name: "Pennsylvania", priority: false, slug: "pennsylvania" },
    { code: "WV", name: "West Virginia", priority: false, slug: "west-virginia" },
    { code: "DE", name: "Delaware", priority: false, slug: "delaware" },
    { code: "NJ", name: "New Jersey", priority: false, slug: "new-jersey" },
  ],
  certifications: [
    "NABCEP PV Installation Professional (PVIP)",
    "Licensed Master Electrician (multi-state)",
    "Class A Contractor License",
    "Tesla Powerwall Certified",
    "SolarEdge Certified",
    "Enphase Certified",
    "SMA Certified",
    "Generac Certified",
    "CertainTeed Master Craftsman Roofing",
    "Franklin Battery Certified",
    "EG4 Battery Certified",
    "Sol-Ark Certified",
    "Solies Certified",
    "OSHA Compliant",
  ],
  services: [
    {
      slug: "solar-epc",
      title: "Solar EPC",
      tagline: "Engineering. Procurement. Construction.",
      short:
        "Full-scope EPC for commercial, distributed generation, and residential, from system design through commissioning.",
      icon: "epc",
    },
    {
      slug: "battery-storage",
      title: "Battery Storage & BESS",
      tagline: "Resilience. Backup. Optimization.",
      short:
        "Code-compliant battery energy storage systems designed for reliability, backup power, and energy independence.",
      icon: "bess",
    },
    {
      slug: "decommissioning",
      title: "Decommissioning",
      tagline: "Safe disconnect. Clean removal.",
      short:
        "Professional solar DCom for systems being removed, upgraded, or replaced, with documentation and site integrity.",
      icon: "dcom",
    },
    {
      slug: "removal-reinstallation",
      title: "Removal & Reinstallation",
      tagline: "Re-roof. Re-install.",
      short:
        "Complete R&R for roof replacements, system upgrades, and performance improvements, start to finish.",
      icon: "rnr",
    },
    {
      slug: "roofing",
      title: "Roofing",
      tagline: "Commercial & Residential.",
      short:
        "Professional roofing services including asphalt shingle, TPO, EPDM, and metal roof replacements.",
      icon: "extras",
    },
    {
      slug: "additional-services",
      title: "Electrical & O&M",
      tagline: "Electrical. O&M. Diagnostics.",
      short:
        "Service upgrades, diagnostics, preventive maintenance, and commissioning support.",
      icon: "extras",
    },
  ],
} as const;
