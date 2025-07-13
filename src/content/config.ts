import { defineCollection, z } from 'astro:content';

const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    primaryButton: z.string(),
    secondaryButton: z.string(),
    image: z.string(),
    imageAlt: z.string()
  })
});

const featuresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string()
    }))
  })
});

const rulesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    rules: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string()
    }))
  })
});

const equipmentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    equipment: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string()
    }))
  })
});

const playgroundsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    playgrounds: z.array(z.object({
      title: z.string(),
      description: z.string(),
      location: z.string(),
      icon: z.string(),
      backgroundImage: z.string()
    }))
  })
});

const footerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    copyright: z.string(),
    socialLinks: z.array(z.object({
      platform: z.string(),
      url: z.string(),
      icon: z.string()
    }))
  })
});

export const collections = {
  'sl/hero': heroCollection,
  'sl/features': featuresCollection,
  'sl/rules': rulesCollection,
  'sl/equipment': equipmentCollection,
  'sl/playgrounds': playgroundsCollection,
  'sl/footer': footerCollection,
  'en/hero': heroCollection,
  'en/features': featuresCollection,
  'en/rules': rulesCollection,
  'en/equipment': equipmentCollection,
  'en/playgrounds': playgroundsCollection,
  'en/footer': footerCollection,
}; 