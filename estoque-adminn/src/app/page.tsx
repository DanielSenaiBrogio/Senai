import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <img 
        src="https://d7hftxdivxxvm.cloudfront.net/?height=675&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2P6t_Yt6dF0TNN76dlp-_Q%252F3417757448_4a6bdf36ce_o.jpg&width=1200" 
        alt="Sistema de gerenciamento de estoque"
        className={styles.imagem}
      />
    </div>
  );
}
