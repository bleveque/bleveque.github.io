const introText = '\
In 2014, I joined Floored, a real estate tech startup specializing in \
space visualization and optimization problems, as a full-stack engineer. \
';

const flooredLogo = '\
  ..........                     \
..............                   \
  ...............                \
     ...............             \
        ..............           \
           ..............        \
              ..............     \
                ..............∘· \
                   ........·•*#- \
                      ..·•*####- \
      ·∘               ∘#######- \
      ∘##*∘·           •#######- \
      ∘#####-∘         •#######- \
      ∘######-·        •#####*∘. \
      ∘###-•......     •##*-·    \
      ∘*•·..........   •-∘       \
         ............·-∘         \
            ......·•*##∘         \
              .·•*#####∘         \
              ·########∘         \
              ·########∘         \
              ·########∘         \
      ·•.     ·######*∘.         \
      ∘###•∘  ·###-∘             \
      ∘#####*•∘-∘.               \
      ∘#######*                  \
      ∘#######-                  \
      ∘#######-                  \
      ∘#######-                  \
      ∘#######-                  \
      ∘#######-                  \
      ∘#####-•.                  \
      ∘##*•·                     \
      ∘-·                        \
';
const flooredLogoWidth = 33;

const transitionText = '\
In 2017, Floored was acquired by CBRE, and our team became CBRE Build NYC. \
';

const cbreBuilderHat = '\
                     .·•-******-∘•-*****-·                             \
                ·∘-*********-********-****-·                           \
               ·*********∘    ·*****·  ·****-∘                         \
          .·∘•************-·    ·****-·  ·-****∘                       \
         ∘********-•∘·.•****-.    ∘****-.  ·****-·                     \
         ****•∘·         •****-·    ∘****-·  ·****-·                   \
        ∘***               ∘****-·    ∘****•   ·-***.                  \
       ·***∘   .··∘·         ∘-***-·    -**•     -**-                  \
      ∘-*************•.        ∘-***∘            ∘****•                \
     ∘**********---****-∘        •**-             *****•               \
     ***-∘·.        ∘*****•.     .***∘            ∘*****.              \
    •***.             ·-*****∘.   ∘***             *****•              \
   ·***∘                .•*****·  .***·            -*****              \
   -***                    ∘-***.  -**-            ·*****∘             \
  .***∘                      ***•  ·***∘            •*****·            \
 ·•***∘                      -***   ****            .*******∘          \
 *****·                      .***∘  ∘***·            -*******•.        \
.****   ..                    •***.  -**-      .·∘•-*****-∘*****•·     \
 ·***-. •***••                .***-∘·∘***•∘•-**********-•. .∘******-∘. \
  .****-******.   -•∘·.        *****************-•∘·.          ·•****∘ \
   ·**********•∘·.*****•       ∘∘•--*******-∘∘·.                 .***∘ \
     ··∘•-*************-∘··.           ..                        ∘***∘ \
            .·∘•-****************-•∘·.                     ..··•*****· \
                   .·∘•---***************-••••••••••---***********•·   \
                               ..·∘•-************************--•·      \
                                        .···∘∘∘∘∘∘∘∘∘··..              \
';
const cbreBuilderHatWidth = 71;

const flooredLeftOffset = Math.floor((cbreBuilderHatWidth - flooredLogoWidth) / 2); // heh

const endingText = '\
Working on the Floored / CBRE Build team has been an incredible experience.\n\
\n\
\n\
Some projects I\'ve enjoyed:\n\
\n\
- building 3D scene-editing tools for our amazingly talented 3D art team\n\
\n\
- helping build a floorplan optimization product from the first commits through the MVP (and beyond)\n\
\n\
- accelerating 2D graph operations in said product\n\
\n\
- helping build a system for visualizing 2D floorplans in 3D\n\
\n\
- helping implement a faceted navigation feature using Algolia\n\
\n\
- contributing to a database system upgrade (CouchDB 1.x --> 2.x) and writing a blog post about it: https://medium.com/cbrebuild/moving-to-couchdb-2-x-c2bc606970cb\n\
\n\
- spreading the word about our in-house WebGL graphics engine through documentation, tutorials, and presentations \n\
\n ';

export default () => {
  return {
    stringRenderData: [
      { type: 'text', data: { start: [14,6], maxWidth: 80, text: introText }},
      { type: 'textrect', data: { start: [14 + flooredLeftOffset,2], isYRelative: true, width: flooredLogoWidth, text: flooredLogo, props: { className: 'floored-purple' } }},
      { type: 'text', data: { start: [14,4], isYRelative: true, maxWidth: 80, text: transitionText }},
      { type: 'textrect', data: { start: [14,3], isYRelative: true, width: cbreBuilderHatWidth, text: cbreBuilderHat, props: { className: 'cbre' } }},
      { type: 'text', data: { start: [14,4], isYRelative: true, maxWidth: 80, text: endingText }}
    ]
  };
};