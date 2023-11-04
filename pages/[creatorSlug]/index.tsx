import supabase from "../../utils/supabaseClient";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaSnapchatGhost, FaTiktok, FaWhatsapp, FaLink } from "react-icons/fa";
import { PiUploadSimpleLight } from "react-icons/pi";
import { useEffect, useState } from "react";

type Link = {
  title: string;
  url: string;
};

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [url, setUrl] = useState<string | undefined>();
  const [links, setLinks] = useState<Link[]>();
  const [username, setUsername] = useState<string | undefined>();
  const [images, setImages] = useState<ImageListType>([]);
  const [profilePictureUrl, setProfilePictureUrl] = useState<
    string | undefined
  >();
  const router = useRouter();
  const { creatorSlug } = router.query;

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await supabase.auth.getUser();
        console.log("user: ", user);
        if (user) {
          const userId = user.data.user?.id;
          setUserId(userId);
          if (userId) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        }
      } catch (error) {
        console.error("Error while fetching user:", error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const getLinks = async () => {
      try {
        const { data, error } = await supabase
          .from("links")
          .select("title, url")
          .eq("user_id", userId);

        if (error) throw error;
        setLinks(data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    if (userId) {
      getLinks();
    }
  }, [userId]);

  const getIconForUrl = (url: string) => {
    if (url.includes("twitter.com")) {
      return <FaTwitter />;
    } else if (url.includes("facebook.com")) {
      return <FaFacebook />;
    } else if (url.includes("instagram.com")) {
      return <FaInstagram />;
    } else if (url.includes("github.com")) {
      return <FaGithub />;
    } else if (url.includes("youtube.com")) {
      return <FaYoutube />;
    } else if (url.includes("linkedin.com")) {
      return <FaLinkedin />;
    } else if (url.includes("whatsapp.com")) {
      return <FaWhatsapp />;
    } else if (url.includes("tiktok.com")) {
      return <FaTiktok />;
    } else if (url.includes("snapchat.com")) {
      return <FaSnapchatGhost />;
    }

    return <FaLink />;
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("URL copied to clipboard");
    } catch (error) {
      console.error("Error copying URL to clipboard:", error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("id, profile_picture_url, username")
          .eq("username", creatorSlug);

        if (error) throw error;

        const profilePictureUrl = data[0]["profile_picture_url"];
        const userId = data[0]["id"];
        const username = data[0]["username"];

        setProfilePictureUrl(profilePictureUrl);
        setUserId(userId);
        const usernameText = `@${username}`;
        setUsername(usernameText);
      } catch (error) {
        console.error("error: ", error);
      }
    };

    if (creatorSlug) {
      getUser();
    }
  }, [creatorSlug]);

  const addNewLink = async () => {
    try {
      if (title && url && userId) {
        const { data, error } = await supabase
          .from("links")
          .insert({
            title: title,
            url: url,
            user_id: userId,
          })
          .select();
        if (error) throw error;
        console.log("data: ", data);
        if (links) {
          setLinks([...data, ...links]);
        }

        window.location.reload();
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const uploadProfilePicture = async () => {
    try {
      if (images.length > 0) {
        const image = images[0];
        if (image.file && userId) {
          const { data, error } = await supabase.storage
            .from("public-storage")
            .upload(`${userId}/${image.file.name}`, image.file, {
              upsert: true,
            });
          if (error) throw error;
          const resp = supabase.storage
            .from("public-storage")
            .getPublicUrl(data.path);
          const publicUrl = resp.data.publicUrl;
          const updateUserResponse = await supabase
            .from("users")
            .update({ profile_picture_url: publicUrl })
            .eq("id", userId);
          if (updateUserResponse.error) throw error;
        }
      }

      window.location.reload();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4 sm:p-8 w-full sm:w-[500px]">
        <div className="flex justify-center">
          {profilePictureUrl && (
            <Image
              src={profilePictureUrl}
              alt="profile-picture"
              height={100}
              width={100}
              className="rounded-full"
            />
          )}
        </div>
        <h1>{username}</h1>

        {links?.map((link: Link, index: number) => (
          <div
            className="bg-[rgb(37,37,37)] w-100 mt-4 mb-3 p-2 rounded-xl cursor-pointer tile"
            key={index}
          >
            <div className="w-100 flex items-center justify-between">
              <div
                className="text-[22px]"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.url;
                }}
              >
                {getIconForUrl(link.url)}
              </div>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.url;
                }}
              >
                {link.title}
              </span>
              <button
                className="bg-[rgb(52,52,52)] p-2 rounded-full text-[18px]"
                onClick={() => copyToClipboard(link.url)}
              >
                <PiUploadSimpleLight />
              </button>
            </div>
          </div>
        ))}

        <div className="mt-4 flex justify-center">
          {links?.map((link: Link, index: number) => (
            <div className="flex justify-center m-6 text-[25px] hover:text-sky-700" key={index}>
              {getIconForUrl(link.url)}
            </div>
          ))}
        </div>

        {/* <hr className="text-[rgb(37,37,37)] mt-6 mb-6" /> */}
        {isAuthenticated && (
          <>
            <div className="mb-6 flex justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const currentUrl = window.location.href;
                  copyToClipboard(currentUrl);
                }}
                className="hover:text-blue-500"
              >
                Click here to copy profile link
              </a>
            </div>
            <div>
              <h2 className="text-2xl sm:text-xl md:text-2xl font-semibold mb-3 mt-10">New Link Creation</h2>

              <div className="mb-6">
                <input
                  type="text"
                  name="title"
                  id="tile"
                  className="mt-3 p-3 w-full rounded-xl border bg-[rgb(37,37,37)] border-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Add your title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="url"
                  id="url"
                  className="mt-3 p-3 w-full rounded-xl border bg-[rgb(37,37,37)] border-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Add your URL link"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform bg-transparent rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                onClick={addNewLink}
              >
                Add New Link
              </button>
            </div>

            <div>
              <h2 className="text-2xl sm:text-xl md:text-2xl font-semibold mb-4 mt-6">
                Upload Profile Image
              </h2>
              {images.length > 0 && (
                <Image
                  src={images[0]["data_url"]}
                  height={100}
                  width={100}
                  alt="profile-picture"
                />
              )}

              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={1}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="bg-[rgb(37,37,37)] flex justify-center p-6 rounded-xl ">
                    {imageList.length === 0 ? (
                      <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        className="w-3/4"
                      >
                        Click to upload a new image or drag and drop
                      </button>
                    ) : (
                      <button onClick={onImageRemoveAll}>Remove image</button>
                    )}
                  </div>
                )}
              </ImageUploading>

              <button
                type="button"
                className="px-4 py-2 mt-4 text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform bg-transparent rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                onClick={uploadProfilePicture}
              >
                Upload Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
