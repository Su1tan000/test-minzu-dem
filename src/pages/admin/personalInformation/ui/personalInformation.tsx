import { Button, Input, Checkbox } from 'antd';

const PersonalInfo = () => {
  return (
    <>
      <nav>personalInformation</nav>
      <br />
      <br />
      <main>
        <div className="flex justify-around">
          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              email:
            </label>
            <Input />
            <br />
            <div className="mt-32">
              <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                push notification
              </label>
              <Checkbox />
            </div>
          </div>
          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              nickname:
            </label>
            <Input />
          </div>
        </div>
      </main>
      <div className="ml-28">
        <Button>Save</Button>
      </div>
    </>
  );
};
export default PersonalInfo;
