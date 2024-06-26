import PreviewProfile from "./PreviewProfile";
import SvgIcon from "./SvgIcon";

export default function PreviewPost({ title, thumbnailURL }) {
    return (
        <div className="flex flex-col bg-mid w-fit h-fit m-[6rem] rounded-xl">
            {/* Title and Profile */}
            <div className="flex flex-row w-full h-[6rem] items-center px-[2rem] justify-between">
                <h2 className="text-3xl text-white text-left mr-[3rem]">
                    {title}
                </h2>
                <div>
                    <PreviewProfile
                        username={"Cat No.1366589"}
                        email={"Cat1366589@cat.com"}
                        imageURL={
                            "https://images.pexels.com/photos/26125343/pexels-photo-26125343/free-photo-of-ginger-cat-sitting-on-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        }
                    />
                </div>
            </div>
            {/* Main Image */}
            <div className="max-h-[50rem] bg-black mx-[1rem] mt-[1rem]  rounded-xl flex flex-col items-center">
                <img
                    className="object-scale-down h-full"
                    alt="Preview Post"
                    src={thumbnailURL}
                />
            </div>
            {/* Icons */}
            <div className="h-[3.6rem] w-full flex flex-row items-center justify-between px-[1rem]">
                {/* Left Buttons */}
                <div className="h-[3.6rem] flex flex-row">
                    <div className="size-[3.6rem]">
                        <SvgIcon
                            name="like"
                            path="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        />
                    </div>
                    <div className="size-[3.6rem]">
                        <SvgIcon
                            name="comment"
                            path="M18 9V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V18L8 16M20 20L17.8062 18.5374C17.5065 18.3377 17.3567 18.2378 17.1946 18.167C17.0507 18.1042 16.9 18.0586 16.7454 18.031C16.5713 18 16.3912 18 16.0311 18H11.2C10.0799 18 9.51984 18 9.09202 17.782C8.71569 17.5903 8.40973 17.2843 8.21799 16.908C8 16.4802 8 15.9201 8 14.8V12.2C8 11.0799 8 10.5198 8.21799 10.092C8.40973 9.71569 8.71569 9.40973 9.09202 9.21799C9.51984 9 10.0799 9 11.2 9H16.8C17.9201 9 18.4802 9 18.908 9.21799C19.2843 9.40973 19.5903 9.71569 19.782 10.092C20 10.5198 20 11.0799 20 12.2V20Z"
                        />
                    </div>
                    <div className="size-[3.6rem]">
                        <SvgIcon
                            name="share"
                            path="M4 20V17.6C4 14.2397 4 12.5595 4.65396 11.2761C5.2292 10.1471 6.14708 9.2292 7.27606 8.65396C8.55953 8 10.2397 8 13.6 8H20M20 8L16 12M20 8L16 4"
                        />
                    </div>
                </div>
                {/* Right Buttons */}
                <div className="h-[3.6rem] flex flex-row-reverse ">
                    <div className="size-[3.6rem]">
                        <SvgIcon
                            name="hide"
                            path="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                        />
                    </div>
                    <div className="size-[3.6rem]">
                        <SvgIcon
                            name="download"
                            path="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
