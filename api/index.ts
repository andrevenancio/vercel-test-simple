export function GET() {
  return new Response(`Hello ${process.env.TEST}`)
}
