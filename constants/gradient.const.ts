// constants/gradient.const.ts
export const GRADIENTS = {
  // Основной градиент (сверху вниз)
    PRIMARY_VERTICAL: {
        colors: ['#E4F2FC', '#728cf38a', '#E4F2FC'] as const,
        locations: [0, 0.5, 1] as const,
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 }
    },
    PRIMARY_VERTICAL_LIGHT: {
        colors: ['#FFFFFF', '#b7c5f961', '#FFFFFF'] as const,
        locations: [0, 0.5, 1] as const,
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 }
    },      
  // Основной градиент (слева направо)
  PRIMARY_HORIZONTAL: {
    colors: ['#BCE7F633', '#395AEF33'] as const,
    locations: [0, 1] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
  },
  
  // Основной градиент (по диагонали)
  PRIMARY_DIAGONAL: {
    colors: ['#E4F2FC', 'rgba(114, 139, 243, 0.1)'] as const,
    locations: [0, 1] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  
  // Обратный градиент
  REVERSE: {
    colors: ['rgba(114, 139, 243, 0.1)', '#E4F2FC'] as const,
    locations: [0, 1] as const,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 }
  }
} as const;