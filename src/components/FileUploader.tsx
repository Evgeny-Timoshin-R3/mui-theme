import { Button } from '@mui/material';
import { FileUpload } from '@mui/icons-material';

export default function FileUploader() {
    return (
        <div style={{ width: 200 }}>
            <Button variant="contained" component="label" color="primary">
                <FileUpload /> Upload a file
                <input type="file" hidden />
            </Button>
        </div>
    );
}
