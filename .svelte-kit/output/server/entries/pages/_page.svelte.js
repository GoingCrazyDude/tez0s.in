import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const Yandhi = "/_app/immutable/assets/yandhi.b063291e.gif";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&display=swap');.svelte-2l707o{background:#FCFAFC;font-family:"JetBrains Mono", monospace;font-size:20px;margin:0;padding:0;left:50%;top:50%}img.svelte-2l707o{position:absolute;left:92.5%;top:85%;transform:translate(-50%, -50%)}.bio.svelte-2l707o{box-shadow:5px 5px 2.5px black;color:#FCFAFC;background:#818181;border-width:4px;border-color:#818181;border-style:solid;border-radius:12px;padding:2em;position:absolute;left:50%;top:40%;transform:translate(-50%, -50%)}a.svelte-2l707o{background:#818181;color:#FCFAFC;text-decoration:underline}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-2l707o" data-svelte-h="svelte-9xrtik"><img${add_attribute("src", Yandhi, 0)} alt="Yandhi" width="300" class="svelte-2l707o"> <div class="bio svelte-2l707o">hi, im tezos <br class="svelte-2l707o">
        idiot programmer, still learning <br class="svelte-2l707o"> <br class="svelte-2l707o">
        -&gt; <a href="https://roblox.com/users/747081921/profile" target="_blank" class="svelte-2l707o">roblox</a> <br class="svelte-2l707o">
        -&gt; <a href="https://discord.com/users/507203871806849055" target="_blank" class="svelte-2l707o">discord</a> <br class="svelte-2l707o">
        -&gt; <a href="https://github.com/GoingCrazyDude" target="_blank" class="svelte-2l707o">github</a> <br class="svelte-2l707o">
        -&gt; <a href="https://youtube.com/UCEfChwRaq082v13mPuG24_g" target="_blank" class="svelte-2l707o">youtube</a> <br class="svelte-2l707o"></div></body>`;
});
export {
  Page as default
};
