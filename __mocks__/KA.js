const KA = jest.genMockFromModule('KA')

KA.getUserProfile = function () {
  return {
    name: '唐唐',
    birthday: '2000-01-01',
  }
}

module.exports = KA
