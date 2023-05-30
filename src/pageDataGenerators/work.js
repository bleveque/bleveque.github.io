import { contentOffsets } from '../constants';
const [left, top] = contentOffsets;

// const imagenText ='\
// In 2020, I joined Imagen, a healthcare technology company.\
// ';

const introText = '\
In 2014, I joined Floored, a real estate tech startup specializing in \
space visualization and optimization problems, as a full-stack engineer. \
';

// const flooredLogo = '\
//   ..........                     \
// ..............                   \
//   ...............                \
//      ...............             \
//         ..............           \
//            ..............        \
//               ..............     \
//                 ..............∘· \
//                    ........·•*#- \
//                       ..·•*####- \
//       ·∘               ∘#######- \
//       ∘##*∘·           •#######- \
//       ∘#####-∘         •#######- \
//       ∘######-·        •#####*∘. \
//       ∘###-•......     •##*-·    \
//       ∘*•·..........   •-∘       \
//          ............·-∘         \
//             ......·•*##∘         \
//               .·•*#####∘         \
//               ·########∘         \
//               ·########∘         \
//               ·########∘         \
//       ·•.     ·######*∘.         \
//       ∘###•∘  ·###-∘             \
//       ∘#####*•∘-∘.               \
//       ∘#######*                  \
//       ∘#######-                  \
//       ∘#######-                  \
//       ∘#######-                  \
//       ∘#######-                  \
//       ∘#######-                  \
//       ∘#####-•.                  \
//       ∘##*•·                     \
//       ∘-·                        \
// ';
// const flooredLogoWidth = 33;

const flooredLogo = '\
.........          \
   ........        \
      ........     \
        .........  \
           ....∘o#∘\
   ·         ∘m###∘\
   #m∘       o####∘\
   ####∘     o###m·\
   #m•....   o#•.  \
   . ......·•·     \
       ..∘o##·     \
        #####·     \
        #####·     \
   m∘   ###o·      \
   ###o·m∘         \
   #####           \
   #####           \
   #####           \
   ####m           \
   ##o·            \
   ·               \
';
const flooredLogoWidth = 19;

// const flooredLogo = '\
//    .                   \
//  ......                \
// ..........             \
//   ...........          \
//      ...........       \
//         ..........     \
//           .............\
//               .....∘o#∘\
//                 ·•####∘\
//    ·#o·         o#####∘\
//    ·###m•.      o#####∘\
//    ·####o·      o###m∘.\
//    ·#o∘......   om∘.   \
//     ...........•∘      \
//         ...·•m##·      \
//          .o#####·      \
//          .######·      \
//          .######·      \
//    ·#o.  .###m∘        \
//    ·####o∘o∘           \
//    ·#####m             \
//    ·#####m             \
//    ·#####m             \
//    ·#####m             \
//    ·#####∘             \
//    ·##o·               \
//    .·                  \
// ';
// const flooredLogoWidth = 22;

const transitionText = '\
In 2017, Floored was acquired by CBRE, and our team became CBRE Build NYC. \
';

// const cbreBuilderHat = '\
//                      .·•-******-∘•-*****-·                             \
//                 ·∘-*********-********-****-·                           \
//                ·*********∘    ·*****·  ·****-∘                         \
//           .·∘•************-·    ·****-·  ·-****∘                       \
//          ∘********-•∘·.•****-.    ∘****-.  ·****-·                     \
//          ****•∘·         •****-·    ∘****-·  ·****-·                   \
//         ∘***               ∘****-·    ∘****•   ·-***.                  \
//        ·***∘   .··∘·         ∘-***-·    -**•     -**-                  \
//       ∘-*************•.        ∘-***∘            ∘****•                \
//      ∘**********---****-∘        •**-             *****•               \
//      ***-∘·.        ∘*****•.     .***∘            ∘*****.              \
//     •***.             ·-*****∘.   ∘***             *****•              \
//    ·***∘                .•*****·  .***·            -*****              \
//    -***                    ∘-***.  -**-            ·*****∘             \
//   .***∘                      ***•  ·***∘            •*****·            \
//  ·•***∘                      -***   ****            .*******∘          \
//  *****·                      .***∘  ∘***·            -*******•.        \
// .****   ..                    •***.  -**-      .·∘•-*****-∘*****•·     \
//  ·***-. •***••                .***-∘·∘***•∘•-**********-•. .∘******-∘. \
//   .****-******.   -•∘·.        *****************-•∘·.          ·•****∘ \
//    ·**********•∘·.*****•       ∘∘•--*******-∘∘·.                 .***∘ \
//      ··∘•-*************-∘··.           ..                        ∘***∘ \
//             .·∘•-****************-•∘·.                     ..··•*****· \
//                    .·∘•---***************-••••••••••---***********•·   \
//                                ..·∘•-************************--•·      \
//                                         .···∘∘∘∘∘∘∘∘∘··..              \
// ';
// const cbreBuilderHatWidth = 71;

const cbreBuilderHat = '\
         ·∘∘•##•••##∘              \
       ∘####•· ∘•#··•#∘            \
    ·##•∘···•#∘  ∘••··•#∘          \
    ••       ·•#∘  ∘#• ·•#         \
   ∘#••###•·   ·•#·     ·#•·       \
  ∘#∘··  ·∘#•∘   #∘      •##       \
  #•        ·•#∘ ∘#      ·##∘      \
 ∘#·          ∘#· #∘      •#•·     \
∘#•            #• •#      ∘###•    \
·#• ∘∘∘        ∘#∘∘#∘·∘••#••∘·∘#•∘·\
 ·•####∘·#•∘   ·∘••#••∘··       ∘#∘\
     ·∘∘••##•••∘∘∘·           ··•#∘\
           ····∘∘∘•##•••••###•••∘  \
';
const cbreBuilderHatWidth = 35;

// const cbreBuilderHat = '\
//                 .·.   .·                   \
//            .·∘•mmmm••mmmm∘                 \
//          ∘mmmmm•·.•mmm∘·omm∘               \
//      .∘•ommmoomm∘. .•mm•.·omm∘             \
//      omo•·.   .•mm•  .omm•.·omo∘           \
//     ∘mo         .•mm•  .omo  ·mm·          \
//    ·mmoommmm•·    .•mm.  .    •mm∘         \
//   .mmo•∘∘··∘mmm∘    ∘m•       .mmm∘        \
//   om∘        ·•mm•.  mm·       •mmm        \
//  ·mm           .•mm· •mo       .mmm·       \
//  om∘             ·mo .mm.       ommo·      \
// •mm·              mm· om•       ·mmmmo.    \
// omo .∘·.          ∘mo .mm· ··∘•ommm••mmo•· \
//  omoommm∘ .∘·.    .mmmmmmmmmmo•∘·..   ·•mmo\
//   ∘ommmmmo•mmm∘    .··∘∘•∘·.            ·mo\
//       .·∘•ommmmmmmoo•∘··.         ...··omm•\
//             .···∘∘∘•oommmmmmmmmmmmmmmmmo∘. \
//                        ..··∘∘∘∘∘∘··...     \
// ';
// const cbreBuilderHatWidth = 43;

// const cbreBuilderHat = '\
//                      ..     ..                       \
//                .·∘•mmmmo∘•mmmm•.                     \
//             ∘•mmmmmo•∘mmmmm••mmm•                    \
//          .·•mmmmmmm∘.  ·omm•. ∘mmm•.                 \
//        ommmmmo•∘.∘mmm•.  ·ommo. ·mmm•.               \
//       ·mm•∘.       •mmm∘   ∘mmm•. ∘mmm•              \
//       omo            ∘mmm•   ·mmm   ∘mm·             \
//     .•mmooommmm•.      ∘mmm.  ..     mmm•            \
//     ommmmmmo••mmmo·      mm•         •mmm•           \
//    ·mm∘.       ·ommm•.   ∘mm·        .mmmm·          \
//   .mmo            ∘mmmo·  mmo         ∘mmmo          \
//   •mm.              ·omm. •mm.         mmmm.         \
//   mmo                .mm• .mm•         •mmmo·        \
// .ommo                 omm  omm         .mmmmmo       \
// ·mmo  .               ·mm∘ ·mm∘     ·∘∘•mmm•mmm•·.   \
//  ∘mm• ommo∘            mmm•∘omm••ommmmmmo•∘  ∘ommmm• \
//   •mmmmmmmo  ·mo•∘     •mmmmmmmmmmo•∘·.        .∘omm.\
//    ·∘•ommmmmmmmmmm·..      .···.                 •mm.\
//          .·∘•ommmmmmmmmmmo•∘··.          ..···∘ommm• \
//                .·∘∘∘•••oommmmmmmooooooommmmmmmmmo∘.  \
//                            .·∘∘•••ooooo••∘∘∘··..     \
// ';
// const cbreBuilderHatWidth = 53;

const flooredLeftOffset = Math.floor((cbreBuilderHatWidth - flooredLogoWidth) / 2); // heh

const endingText = '\
Working on the Floored / CBRE Build team was an incredible experience.\n\
\n\
\n\
Some projects I enjoyed:\n\
\n\
- building 3D scene-editing tools for the amazingly talented 3D art team\n\
\n\
- helping build a floorplan optimization product from the first commits through the MVP (and beyond)\n\
\n\
- accelerating 2D graph operations in said product\n\
\n\
- helping build a system for visualizing 2D floorplans in 3D\n\
\n\
- helping implement a faceted navigation feature using Algolia\n\
\n\
- spreading the word about our in-house WebGL graphics engine through documentation, tutorials, and presentations \n\
\n\
- contributing to a database system upgrade (CouchDB 1.x --> 2.x) and writing a [blog post](https://medium.com/cbrebuild/moving-to-couchdb-2-x-c2bc606970cb) about it \
';

export default () => {
  return {
    stringRenderData: [
      { type: 'text', data: { start: [left,top], maxWidth: 80, rightMargin: 5, text: introText }},
      { type: 'textrect', data: { start: [left + flooredLeftOffset,2], isYRelative: true, width: flooredLogoWidth, text: flooredLogo, props: { className: 'floored-purple', 'aria-hidden': true } }},
      { type: 'text', data: { start: [left,4], isYRelative: true, maxWidth: 80, rightMargin: 5, text: transitionText }},
      { type: 'textrect', data: { start: [left,3], isYRelative: true, width: cbreBuilderHatWidth, text: cbreBuilderHat, props: { className: 'cbre', 'aria-hidden': true } }},
      { type: 'text', data: { start: [left,4], isYRelative: true, maxWidth: 80, rightMargin: 5, text: endingText }},
      { type: 'text', data: { start: [left,1], isYRelative: true, maxWidth: 80, text: '\n' }},
    ]
  };
};