// import LoadingState from "@/components/ui/LoadingState";
import UserCard from "@/components/users/UserCard";
import { fetchFollowers } from "@/lib/actions/userActions";
import { User } from "@/types";
import EmptyListState from "../EmptyListState";

const Followers = async ({ params }: { params: { username: string } }) => {

  const data = await fetchFollowers(params.username);
  const profileUser = data.user;

  return (
    <div className=" my-4 flex flex-col items-center">
      {profileUser && profileUser.followers.length < 1 ? (
        <EmptyListState
          username={params.username}
          name={profileUser.name}
          listType={"followers"}
        />
      ) : (
        <>
          {profileUser &&
            profileUser.followers.map((follower: User | string) => (
              <>
                {typeof follower === "object" ? (
                  <UserCard
                    // showBio={true}
                    clipBio={true}

                    key={follower._id}
                    user={follower as User}
                  />
                ) : (
                  ""
                )}
              </>
            ))}
        </>
      )}
    </div>
  );
};

export default Followers;
