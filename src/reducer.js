import config from "./entry.js";

const imgPre = `/${config.appPrefix}/img/`;

const photoFiles = config.photoInfos;
let imgs = [], titles = [], descs = [];

photoFiles.forEach((v, i) => {
    if (v.name) {
        imgs.push(imgPre + v.name);
        titles.push(v.title || "");
        descs.push(v.desc || "");
    }
});

export function reducer(
    state = {
        imgs: imgs,
        titles: titles,
        descs: descs
    },
    action
) {
  switch (action.type) {
      default:
          return state;
  }
}
