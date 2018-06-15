import { mount } from "@vue/test-utils";
import HelloWorld from "../../app/components/hello-world.vue";

describe("hello-world.test.js", () => {
    it("should be vue instance", () => {
        expect(mount(HelloWorld).isVueInstance()).toBe(true);
    });
});
