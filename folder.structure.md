.env.example
.prettierrc
.babelrc
next.config.js
tsconfig.json
package.json
src
|--components
|  |--screens
|  |  |--api
|  |  |  |--index.ts
|  |  |  |--api.models.ts
|  |  |--index
|  |     |--index.ts
|  |     |--index.models.ts
|  |     |--index.parameters.ts
|  |     |--subcomponents
|  |        |--welcome
|  |           |--index.ts
|  |           |--Welcome.ts
|  |           |--Welcome.styled.ts
|  |--shared
|     |--index.ts
|     |--layout
|     |  |--head
|     |  |  |--CustomHead.tsx
|     |  |--layout
|     |  |  |--Layout.tsx
|     |  |--layoutContainer
|     |     |--LayoutContainer.tsx
|     |     |--LayoutContainer.styled.tsx
|     |--typography
|        |--caption
|        |  |--Caption.tsx
|        |  |--Caption.parameters.tsx
|        |  |--Caption.styled.tsx
|        |--heading
|        |  |--Heading.tsx
|        |  |--Heading.styled.tsx
|        |--navigation
|        |  |--Navigation.tsx
|        |  |--Navigation.styled.tsx
|        |--paragraphs
|           |--Paragraphs.tsx
|           |--Paragraphs.parameters.tsx
|           |--Paragraphs.styled.tsx
|--hooks
|  |--useWindowSize.tsx
|--pages
|  |--api
|  |  |--email.ts
|  |  |--rss-blogs.ts
|  |  |--subscribe.ts
|  |  |--unsubscribe.ts
|  |--_app.tsx
|  |--_document.tsx
|  |--index.tsx
|  |--rss.tsx
|--parameters
|  |--index.ts
|  |--constants.ts 
|  |--general.tsx
|  |--page.tsx
|--services
|  |--index.ts
|  |--axios.ts
|  |--blog.ts 
|  |--email.ts
|  |--ga.ts
|  |--mailchimp.ts
|--style
|  |--index.ts
|  |--styled.tsx
|--utils
   |--index.ts
   |--dashToUnderscore.ts
   |--getBase64.ts 
   |--underscoreToDash.ts