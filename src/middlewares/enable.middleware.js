exports.hasValidFields = (req, res, next) => {
  const errors = []

  if (JSON.stringify(req.body) !== '{}') {
    if (!req.body.email) {
      errors.push('Missing name')
    }
    if (!req.body.password) {
      errors.push('Missing password')
    }
    if (!req.body.code) {
      errors.push('Missing code')
    }
    if (!req.body.zone) {
      errors.push('Missing zone')
    }

    if (errors.length) {
      return res.status(400).send({ errors: errors.join(',') })
    } else {
      return next()
    }
  } else {
    return res
      .status(400)
      .send({ errors: 'Missing body' })
  }
}
