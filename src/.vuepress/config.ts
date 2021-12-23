import { defineUserConfig } from '@vuepress/cli';
import { DefaultThemeOptions } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";
import PrismLanguageExtension from './plugins/PrismLanguageExtension';
import * as Prism from 'prismjs';

const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  title: 'Vuepress Testing Field',
  description: 'Vuepress Testing Field',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: false,
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/using-vue.md',
            '/guide/second-page.md'
          ]
        }
      ],
    }
  },

  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      PrismLanguageExtension,
      {
        f: (l: Prism.Languages) => {
          l['arith'] = {
            'comment': {
              pattern: /(^|[^\\])#.*/,
              lookbehind: true,
              greedy: true
            },
            'number': {
              pattern: /\d+/,
              greedy: true,
            },
            'operator': {
              pattern: /(\+|-|\*|\/|\^)/,
            },
            'punctuation': {
              pattern: /;/
            },
          };

          console.log("extended");
        }
      }
    ]
  ]
});
