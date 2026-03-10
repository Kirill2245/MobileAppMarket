export const COLORS = {
    PRIMARY_BG_START : '#E4F2FC',
    PRIMARY_BG_END: '#728BF31A'
}

export const GRADIENT_PRYMARY_BG = {
  PRYMARY: {
    LIST_COLORS: ['#E4F2FC','#728BF31A'] as const,
    COUNT_COLORS: [0, 1] as const
  }
} as const;

export const GRADIENT_PRYMARY_BG_REVERSE = {
  PRYMARY: {
    LIST_COLORS: ['#718AF3','#E4F2FC'] as const,
    COUNT_COLORS: [0, 1] as const
  }
} as const;

