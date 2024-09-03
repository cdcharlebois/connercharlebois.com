import { remark } from "remark";
import html from "remark-html";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";


export default async function markdownToHtml(markdown: string) {
  // console.log({markdown})
  // const result = await remark().use(remarkParse).use(rehypeRaw).use(rehypeStringify).process(markdown);
  const result = await unified().use(remarkParse)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeRaw)
  .use(rehypeDocument)
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process(markdown);
  // console.log({markdown, result})
  return result.toString();
}
