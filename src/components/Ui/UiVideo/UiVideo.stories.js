import UiVideo from "./UiVideo";
import video from "./video/video.mp4";

export default {
    title: 'Ui-kit/UiVideo',
    component: UiVideo,
};

const props = {
    src: video,
    playbackRate: 1,
    classes: "",
};

export const Default = {
  args: {
    ...props,
  },
};
