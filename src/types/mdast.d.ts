declare module 'mdast' {
    import type { Node } from 'unist';
  
    export type Root = Node & { type: 'root'; children: Node[] };
    export type Paragraph = Node & { type: 'paragraph'; children: Node[] };
    export type Text = Node & { type: 'text'; value: string };
    export type Heading = Node & { type: 'heading'; depth: number; children: Node[] };
    export type Link = Node & { type: 'link'; url: string; title?: string; children: Node[] };
    export type Image = Node & { type: 'image'; url: string; alt?: string; title?: string };
    export type List = Node & { type: 'list'; ordered: boolean; start?: number; children: Node[] };
    export type ListItem = Node & { type: 'listItem'; children: Node[] };
    export type Code = Node & { type: 'code'; lang?: string; value: string };
  }
  