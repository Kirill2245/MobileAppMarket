export const COLORS = {
    PRIMARY_BG_START : '#E4F2FC',
    PRIMARY_BG_END: '#728BF31A',
    PRIMARY_BG:'#E4F2FC',
    TITLE_GREY:'#1D1D1F',
    SUBTITLE_GREY:'#6E6E73',
    PRIMARY_BUTTON_COLOR:'#B7C5F9',
    PRIMARY_BUTTON_TEXT:'#101073',
    PRIMARY_BORDER_COLOR:'#101073',
    CARD_BG:'#FBFBFD',
    TAG_BG:"#F2F4FE",
    PRIMARY_BORDER_GREY:'#E5E5E7',
    NOTIFICATION_BG:'#F5D76E'
}

export const GRADIENT_PRYMARY_BG = {
  PRYMARY: {
    LIST_COLORS: ['#E4F2FC','#728BF31A'] as const,
    COUNT_COLORS: [0, 1] as const
  }
} as const;

export const GRADIENT_PRYMARY_BG_FOUR = {
  PRYMARY: {
    LIST_COLORS: ['#E4F2FC','#728cf377'] as const,
    COUNT_COLORS: [0.1, 0.9] as const
  }
} as const;

export const GRADIENT_PRYMARY_BG_REVERSE = {
  PRYMARY: {
    LIST_COLORS: ['#718AF3','#E4F2FC'] as const,
    COUNT_COLORS: [0.33, 0.77] as const
  }
} as const;

