import type { Plugin } from '@vuepress/core';
import * as Prism from 'prismjs';
import type { Languages } from 'prismjs';

export interface PrismLanguageExtensionPluginOptions {
    f: (l: Languages) => void;
};

const plugin: Plugin<PrismLanguageExtensionPluginOptions> = ({
    f = (l) => {},
}) => {
    f(Prism.languages);

    return {
        name: "prism-language-extension",
    };
};

export default plugin;
