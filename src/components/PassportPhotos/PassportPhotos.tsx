import React, { useState, ChangeEvent } from "react";
import s from "./PassportPhotos.module.scss";
import icon from "../../assets/icon.png";
import icon2 from "../../assets/icon2.png";
import document from "../../assets/document-upload.png";
import camera from "../../assets/camera.png";

const PassportPhotos = () => {
  const [selectedImages, setSelectedImages] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newSelectedImages = [...selectedImages];
      newSelectedImages[index] = reader.result as string;
      setSelectedImages(newSelectedImages);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className={s.passportPhotos}>
      <div className="container">
        <div className={s.title}>
          <h2>Фото с паспортом в руках</h2>
        </div>
        <div className={s.subtitle}>
          <p>
            Сфотографируйтесь на камеру или загрузите фото с паспортом в руках
          </p>
        </div>
        <div
          style={selectedImages[0] ? { border: "none" } : undefined}
          className={s.photos_block}
        >
          {selectedImages[0] && (
            <div className={s.photos_block__image}>
              <img src={selectedImages[0]} alt="img" />
            </div>
          )}
          <img src={icon} alt="img" />
          <div className={s.photos_block__btns}>
            <button>
              <label htmlFor="upload-photo">
                <img src={document} alt="img" />
                <span>Загрузить</span>
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="upload-photo"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 0)}
              />
            </button>
            <button>
              <img src={camera} alt="img" />
              <span>Открыть камеру</span>
            </button>
          </div>
        </div>
        <div className={s.title}>
          <h2>Фото с паспортом в руках</h2>
        </div>
        <div className={s.subtitle}>
          <p>
            Изображение в формате <span>JPEG</span>
          </p>
          <p>
            не более <span>4,5 МБ</span>
          </p>
        </div>
        <div
          style={selectedImages[1] ? { border: "none" } : undefined}
          className={s.photos_block}
        >
          {selectedImages[1] && (
            <div className={s.photos_block__image}>
              <img src={selectedImages[1]} alt="img" />
            </div>
          )}
          <img src={icon2} alt="img" />
          <div className={s.photos_block__title}>
            <h2>Лицевая сторона</h2>
          </div>
          <div className={s.photos_block__btns}>
            <button>
              <label htmlFor="upload-photo2">
                <img src={document} alt="img" />
                <span>Загрузить</span>
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="upload-photo2"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 1)}
              />
            </button>
          </div>
        </div>
        <div
          style={selectedImages[2] ? { border: "none" } : undefined}
          className={s.photos_block}
        >
          {selectedImages[2] && (
            <div className={s.photos_block__image}>
              <img src={selectedImages[2]} alt="img" />
            </div>
          )}
          <img src={icon2} alt="img" />
          <div className={s.photos_block__title}>
            <h2>Обратная сторона</h2>
          </div>
          <div className={s.photos_block__btns}>
            <button>
              <label htmlFor="upload-photo3">
                <img src={document} alt="img" />
                <span>Загрузить</span>
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="upload-photo3"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 2)}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassportPhotos;
