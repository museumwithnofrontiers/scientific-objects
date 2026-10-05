import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'scientificObjects',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Scientific objects',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '827d2b0c-14c4-5af4-883c-a966ae4b929e',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'fa16c243-a50e-562c-8d05-fe7c41233b43',
    dynasty: {
      item: '8156c3ae-ba08-58a6-9fc3-bd29004780ae',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'pt',
      id: 'prt',
      country: 'Portugal',
    },
    partner: {
      id: '2b1c0dc0-0010-5164-be2c-49145ffe45bb',
      name: 'Museum of Macedonia',
      city: 'Skopje',
      country: 'North Macedonia',
      objects: 1,
    },
  },
})
