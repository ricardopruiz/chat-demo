import { shallowMount } from "@vue/test-utils";
import BaseChatMessage from "@/components/baseComponents/BaseChatMessage";

const MESSAGE_TEXT = "Lorem Ipsum";
const MESSAGE_USER = "John Doe";

describe("BaseChatMessage", () => {
  it("render message given in prop", () => {
    const wrapper = shallowMount(BaseChatMessage, {
      propsData: {
        messageText: MESSAGE_TEXT,
      },
    });

    expect(wrapper.text()).toBe(MESSAGE_TEXT);
  });

  it("render user name given in prop", () => {
    const wrapper = shallowMount(BaseChatMessage, {
      propsData: {
        messageUser: MESSAGE_USER,
      },
    });

    expect(wrapper.text()).toBe(MESSAGE_USER);
  });
});
