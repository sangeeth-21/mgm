
# SpecD Website - cPanel Deployment Guide

## Prerequisites
- cPanel hosting account with Node.js support
- Domain name configured
- SSH access (optional but recommended)

## Step 1: Build the Project Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **The build files will be in the `dist` folder**

## Step 2: Upload Files to cPanel

### Method 1: File Manager (Recommended for beginners)

1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to public_html directory**
4. **Upload the contents of the `dist` folder** (not the folder itself)
5. **Upload the `.htaccess` file** from the project root
6. **Set proper permissions:**
   - Files: 644
   - Directories: 755

### Method 2: FTP Upload

1. **Connect via FTP client (FileZilla, etc.)**
2. **Upload all contents from `dist` folder to public_html**
3. **Upload `.htaccess` file**

## Step 3: Configure cPanel Settings

### 3.1 Set up Redirects (if needed)
- Go to **Redirects** in cPanel
- Set up www to non-www redirect (or vice versa)

### 3.2 Configure Error Pages
- Go to **Error Pages** in cPanel
- Set 404 error page to redirect to index.html

### 3.3 Enable HTTPS
- Go to **SSL/TLS** in cPanel
- Install SSL certificate (Let's Encrypt is free)
- Force HTTPS redirects

## Step 4: Domain Configuration

### 4.1 DNS Settings
Ensure your domain points to your hosting server:
```
A Record: @ -> Server IP
A Record: www -> Server IP
```

### 4.2 Subdomain Setup (if using subdomain)
- Go to **Subdomains** in cPanel
- Create subdomain pointing to public_html

## Step 5: Performance Optimization

### 5.1 Enable Compression
The `.htaccess` file already includes compression settings.

### 5.2 Enable Caching
- Go to **Optimize Website** in cPanel
- Enable compression for all content

### 5.3 CDN Setup (Optional)
- Consider using Cloudflare for better performance
- Configure CDN settings in cPanel if available

## Step 6: Testing

1. **Check website loading:** Visit your domain
2. **Test all sections:** Ensure navigation works
3. **Test mobile responsiveness**
4. **Test dark/light mode toggle**
5. **Test contact form** (may need backend configuration)

## Step 7: SSL Certificate Installation

### Free SSL (Let's Encrypt):
1. Go to **SSL/TLS** in cPanel
2. Click **Let's Encrypt**
3. Select your domain
4. Click **Issue**

### Paid SSL:
1. Purchase SSL certificate
2. Upload certificate files in cPanel SSL section

## Step 8: Security Configuration

### 8.1 Update .htaccess for security
The provided `.htaccess` file includes:
- Security headers
- Compression
- Caching rules
- SPA routing support

### 8.2 File Permissions
Set correct permissions:
```
Files: 644
Directories: 755
.htaccess: 644
```

## Step 9: Backup Setup

1. **Enable automatic backups** in cPanel
2. **Download manual backup** before major updates
3. **Store backup files** securely

## Step 10: Monitoring and Maintenance

### 10.1 Analytics Setup
- Add Google Analytics code to index.html
- Set up Google Search Console

### 10.2 Error Monitoring
- Check cPanel error logs regularly
- Monitor website uptime

## Troubleshooting Common Issues

### Issue 1: 404 Errors on Page Refresh
**Solution:** Ensure `.htaccess` file is uploaded with SPA routing rules

### Issue 2: CSS/JS Files Not Loading
**Solution:** 
- Check file paths in index.html
- Verify MIME types in .htaccess

### Issue 3: Images Not Loading
**Solution:**
- Upload images to correct directory
- Check image paths in code
- Verify file permissions

### Issue 4: SSL Issues
**Solution:**
- Force HTTPS in .htaccess
- Update any hardcoded HTTP links
- Clear browser cache

## File Structure on Server

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── lovable-uploads/
│   └── b6457b51-8464-4b5b-9ed7-9b8fec7a965e.png
└── other static files
```

## Contact Form Backend (Optional)

For contact form functionality, you may need:
1. **PHP script** for form processing
2. **Email configuration** in cPanel
3. **SMTP settings** for reliable email delivery

## Performance Tips

1. **Optimize images** before upload
2. **Use WebP format** for better compression
3. **Enable browser caching** via .htaccess
4. **Use CDN** for static assets
5. **Monitor Core Web Vitals**

## Maintenance Schedule

- **Weekly:** Check error logs
- **Monthly:** Update content and check performance
- **Quarterly:** Review security settings
- **Annually:** Renew SSL certificates (if not auto-renewing)

This deployment guide ensures your SpecD website runs optimally on cPanel hosting with proper security, performance, and SEO configurations.
