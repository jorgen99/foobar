import { Link } from "react-router-dom";

export function FooBar() {
  return (
    <>
      <div>
        <h1>FooBar page</h1>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis ornare lectus et bibendum. Vivamus
            vitae congue nulla. In laoreet vehicula porttitor. Suspendisse congue tellus nisl, sed vestibulum lorem
            sodales et. Fusce diam odio, ornare vitae augue eu, tincidunt sagittis magna. Aliquam molestie tortor
            turpis, at suscipit sem gravida sed. Ut at ex commodo, condimentum nibh vitae, laoreet neque. Vivamus congue
            nunc et ultrices elementum. Sed ac vulputate turpis, a mollis mi. Nullam ultrices ut mauris at sodales.
            Morbi placerat a neque quis aliquam. Sed suscipit lectus vitae elit auctor, id varius ipsum iaculis.
            Vestibulum eget dui molestie, congue neque ut, vulputate eros.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit elit, pharetra quis ligula eu, accumsan
            viverra odio. Donec consectetur in orci id hendrerit. Suspendisse potenti. Nullam pharetra pretium turpis,
            eget posuere dui fermentum in. Nullam purus sapien, tempor vitae tortor posuere, finibus lobortis metus. In
            hac habitasse platea dictumst. Curabitur lectus nulla, faucibus sed neque quis, imperdiet cursus sapien. In
            in massa et purus tincidunt interdum. Suspendisse varius, enim a blandit dapibus, mauris nisi interdum nibh,
            at scelerisque ex metus tincidunt tellus. Sed iaculis dignissim dapibus.</p>
        </div>
        <div>
          <Link to="/">Back home</Link>
        </div>
      </div>
    </>
  );
}
