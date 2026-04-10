import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

const url = process.argv[2] || 'http://localhost:5173'
const label = process.argv[3] || ''
const dir = './temporary screenshots'
fs.mkdirSync(dir, { recursive: true })

const existing = fs.readdirSync(dir).filter((f) => f.startsWith('screenshot-'))
const nums = existing
  .map((f) => parseInt((f.match(/^screenshot-(\d+)/) || [])[1] || '0', 10))
  .filter(Number.isFinite)
const n = (nums.length ? Math.max(...nums) : 0) + 1
const name = `screenshot-${n}${label ? `-${label}` : ''}.png`
const out = path.join(dir, name)

const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
await new Promise((r) => setTimeout(r, 800))
await page.screenshot({ path: out, fullPage: true })
await browser.close()
console.log(out)
