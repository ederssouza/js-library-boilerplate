/* eslint-disable no-undef */
'use strict'

import { expect } from 'chai'
import { sum } from '../src/lib'

describe('# sum', function () {
  it('Should be a function', function () {
    expect(sum).to.be.a('function')
  })

  it('Should return 4 when receiving 1 and 3', function () {
    expect(sum(1, 3)).to.be.equal(4)
  })

  it('Should return 8 when receiving 6 and 2', function () {
    expect(sum(6, 2)).to.be.equal(8)
  })

  it('Should return an error when receiving only one parameter', function () {
    expect(sum(1)).to.be.an('error')
  })

  it('Should return an error when the parameter is not a number', function () {
    expect(sum(1, 'a')).to.be.an('error')
  })

  it('Should return an error when receiving NaN and 1', function () {
    expect(sum(NaN, 1)).to.be.an('error')
  })

  it('Should return an error when receiving Infinity and 1', function () {
    expect(sum(Infinity, 1)).to.be.an('error')
  })
})
