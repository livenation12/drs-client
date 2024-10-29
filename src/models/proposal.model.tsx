export type SourceType = 'Internal' | 'External'

export interface Proposal {
          id: number | undefined
          title: string | undefined
          description: string | undefined
          source: string | undefined
          sourceType: SourceType
          attachment: string | File | undefined
          createdAt?: string | Date
          updatedAt?: string | Date
}