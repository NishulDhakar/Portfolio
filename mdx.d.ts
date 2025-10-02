declare module '*.mdx' {
  import { MDXProps } from 'mdx/types'
  export default function MDXContent(props: MDXProps): JSX.Element
  export const meta: Record<string, any>
}

declare module 'mdx/types' {
  export interface MDXProps {
    components?: Record<string, React.ComponentType<any>>
    [key: string]: any
  }
}
