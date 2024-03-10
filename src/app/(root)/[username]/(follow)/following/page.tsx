import LoadingState from "@/components/ui/LoadingState";
import UserCard from "@/components/users/UserCard";
import { fetchFollowing } from "@/lib/actions/userActions";
import { User } from "@/types";
import EmptyListState from "../EmptyListState";

const Following = async ({ params }: { params: { username: string } }) => {

  const data = await fetchFollowing(params.username);
  const profileUser = data.user;
  const loading = data.loading;

  return (
    <div className=" my-4 flex flex-col items-center">
      {loading && <LoadingState />}
      {!loading && (
        <>
          {profileUser && profileUser.following.length < 1 ? (
            <EmptyListState
              username={params.username}
              name={profileUser.name}
              listType={"following"}
            />
          ) : (
            <>
              {profileUser &&
                profileUser.following.map((followedUser: User | string) => (
                  <>
                    {typeof followedUser === "object" ? (
                      <UserCard
                        clipBio={true}
                        key={followedUser._id}
                        user={followedUser as User}
                      />
                    ) : (
                      ""
                    )}
                  </>
                ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Following;
