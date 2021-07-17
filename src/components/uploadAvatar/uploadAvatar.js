import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadAvatar = ({ setAvatar, avatar, editar, dataSelected }) => {
  const onDrop = useCallback(
    (acceptdFiles) => {
      const file = acceptdFiles[0];
      setAvatar({ file, preview: URL.createObjectURL(file) });
    },
    [setAvatar]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/png, image/jpg, image/jpeg",
    noKeyboard: true,
    onDrop,
  });
  return (
    <div className="image__upload" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <img
          // className={avatar ? 'image__avatar' : 'image__carga'}
          src=""
          alt=""
        />
      ) : editar && dataSelected.corporation.logo ? (
        <img
          className="image__avatar"
          src={
            dataSelected.corporation.logo ? dataSelected.corporation.logo : ""
          }
          alt=""
        />
      ) : editar === true ? (
        <img
          className="image__avatar"
          src={dataSelected.photo ? dataSelected.photo : ""}
          alt=""
        />
      ) : (
        <img
          className="image__avatar"
          src={avatar ? avatar.preview : ""}
          alt=""
        />
      )}
    </div>
  );
};

export { UploadAvatar };
