import PreviewPost from "../general/PreviewPost";

export default function PostCreation() {
    return (
        <>
            <PreviewPost
                title="Preview Post Example 1"
                thumbnailURL="https://images.pexels.com/photos/26125343/pexels-photo-26125343/free-photo-of-ginger-cat-sitting-on-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <PreviewPost
                title="Preview Post Example 2"
                thumbnailURL="https://images.pexels.com/photos/13788335/pexels-photo-13788335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
        </>
    );
}
