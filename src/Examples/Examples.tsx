import Alerts from './Alerts';
import BasicButtonGroup from './ButtonGroup';
import ButtonSizes from './ButtonsSizes';
import Checkboxes from './Checkboxes';
import Chips from './Chips';
import CustomPaginationActionsTable from './CustomerPaginationActionsTable';
import DataTable from './DataTable';
import DateTimePickers from './DateTimePickers';
import Dropdown from './Dropdown';
import FileUploader from './FileUploader';
import IconButtons from './IconButtons';
import Inputs from './Inputs';
import Notifications from './Notifications';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SimpleBottomNavigation from './BottomNavigation';
import SkeletonExample from './Skeleton';
import TypographyExamples from './Typography';

export const EXAMPLES = [
    ['Typography Examples', <TypographyExamples />],
    ['Skeleton Example', <SkeletonExample />],
    ['Button Sizes', <ButtonSizes />],
    ['Icon Buttons', <IconButtons />],
    ['Button groups', <BasicButtonGroup />],
    ['Inputs', <Inputs />],
    ['Alerts', <Alerts />],
    ['Chips', <Chips />],
    ['Checkboxes', <Checkboxes />],
    ['Date Time Pickers', <DateTimePickers />],
    ['File Uploaded', <FileUploader />],
    ['Dropdown', <Dropdown />],
    ['Notifications', <Notifications />],
    ['Sign In', <SignIn />],
    ['Sign Up', <SignUp />],
    ['Bottom Nav', <SimpleBottomNavigation />],
    ['Table with actions', <CustomPaginationActionsTable />],
    ['Data Table using mui-grid', <DataTable />],
];
