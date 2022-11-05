import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "rsuwlva6",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
});

const builder = ImageUrlBuilder(client);
export const urlfor = (source) => builder.image(source);

export default client;
