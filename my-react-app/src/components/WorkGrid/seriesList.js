/**
 * sampleSeries.js
 *
 * Placeholder data for the Portfolio component.
 * Replace this with your own data or fetch it from an API.
 *
 * Shape:
 *   Series  → { id, title, year, description, cover, works }
 *   Work    → { id, title, medium, size, image }
 */

import cocoonSeries from "@/assets/small/cocoon_series_web.jpg";
import cocoon_1 from "@/assets/cocoon_1.JPG";
import cocoon_2 from "@/assets/cocoon_2.JPG";
import cocoon_3 from "@/assets/cocoon_3.jpg";
import phoenix from '@/assets/phoenix.jpg';
import metamorphosis from '@/assets/small/metamorphosis_web.jpg';
import metamorphosis_lg from '@/assets/metamorphosis.JPG';
import first_blooom_lg from '@/assets/first_bloom.JPG';
import first_blooom from '@/assets/small/first_bloom_web.jpg';
import flower_girl from '@/assets/flower_girl.jpg';
import the_gaze from '@/assets/the_gaze.PNG';
import indigo_wash from '@/assets/indigo_wash.jpg';

const seriesList = [
  {
    id: "cocoon-series",
    title: "Cocoon",
    year: "2024",
    description:
      "An exploration of transformation as an internal bodily state, exploring themes of growth, vulnerability, and rebirth.",
    cover: cocoonSeries,
    works: [
      {
        id: "cocoon-1",
        title: "Cocoon I",
        medium: "Watercolor on Paper",
        size: '16"x20"',
        image: cocoon_1,
      },
      {
        id: "cocoon-2",
        title: "Cocoon II",
        medium: "Watercolor on Paper",
        size: '10"x14"',
        image: cocoon_2,
      },
      {
        id: "cocoon-3",
        title: "Cocoon III",
        medium: "Watercolor on Paper",
        size: '9"x12"',
        image: cocoon_3,
      },
    ],
  },
  {
    id: "Metamorphosis-Series",
    title: "Metamorphosis",
    year: "2024-2026",
    description:
      "These ask what transformation looks like when it finally breaks the surface — mythic, violent, luminous. The body here is not hiding but erupting, caught in the moment where inner upheaval becomes visible form.",
    cover: phoenix,
    works: [
      {
        id: "m1",
        title: "Phoenix",
        medium: "Watercolor on Paper",
        size: '11"x15"',
        image: phoenix,
      },
      {
        id: "ls-2",
        title: "Flames I - Aglow",
        medium: "Watercolor on Paper",
        size: '10"x14"',
        image: first_blooom,
        image_lg: first_blooom_lg
      },
      {
        id: "ls-3",
        title: "Metamorphosis",
        medium: "Watercolor on Paper",
        size: '9"x12"',
        image: metamorphosis,
        image_lg: metamorphosis_lg
      },
    ],
  },
  {id: 'Portrait-Studies',
    title: "Portrait Studies",
    year: "2024",
    description: 'A series of portraits combining realism and expressionism.',
    cover: flower_girl,
    works: [
      {
      id: "p1",
      title: "Wistful",
      medium: 'Watercolor on Paper',
      size: '11"x15"',
      image: flower_girl
      },
      {
        id: "p2",
        title: "The Gaze",
        medium: "Watercolor on Paper",
        size: '11"x15"',
        image: the_gaze,
      },
      {
        id: "p3",
        title: "Indigo Wash",
        medium: "Watercolor on Paper",
        size: '11"x15"',
        image: indigo_wash,
      }
    ]

  }
];

export default seriesList;