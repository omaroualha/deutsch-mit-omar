import type { ImageDescription } from '../../types';
import { T } from '../Shared/T';

interface Props {
  image: ImageDescription;
  index: number;
}

export function ImageCard({ image, index }: Props) {
  const colors = ['#4A90E2', '#E91E63', '#FF9800'];
  const bgColor = colors[index % colors.length];

  return (
    <div className="image-card">
      <div className="image-placeholder" style={{ background: bgColor }}>
        <span className="image-placeholder-icon">
          {index === 0 ? '🏠' : index === 1 ? '🤝' : '🏘️'}
        </span>
        <span className="image-placeholder-label">{image.title}</span>
      </div>
      <div className="image-card-body">
        <h4>{image.title}</h4>
        <p className="image-description">{image.description}</p>
        <div className="exam-sentences">
          <h5><T k="b1ExamSentences" /></h5>
          <ul>
            {image.examSentences.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
