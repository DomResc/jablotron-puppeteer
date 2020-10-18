const puppeteer = require('puppeteer')

exports.enable = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const code = req.body.code
  const zone = req.body.zone

  zone.forEach(zone => {
    (async () => {
      try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        await page.goto('https://www.jablonet.net/')
        await page.click('#login-opener')
        await page.type('#login-email', email)
        await page.type('#login-heslo', password)
        await page.click('#loginButton')

        await page.waitForNavigation({ waitUntil: 'networkidle2' })

        await page.click(`#STATE_${zone}_prehled > a`)

        await page.waitForSelector('#userCode')
        await page.waitForSelector('#codeInsert > a')

        await page.type('#userCode', code)
        await page.click('#codeInsert > a')

        await browser.close()
      } catch (error) {
        res.status(500).send({ error: 'Something failed!' })
      }
    })()
  })

  res.status(200).send({ status: 'ok' })
}
