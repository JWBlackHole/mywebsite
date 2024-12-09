import { PostItemTitle, PostItemSubTitle } from "@/components/Texts";

export default function PostItem() {
    return (
      <div className="flex flex-col w-full">
        <div>
            <PostItemTitle>Lorem ipsum dolor sit amet</PostItemTitle>
        </div>
        <div>
            <PostItemSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PostItemSubTitle>
        </div>
      </div>
    );
  }
  